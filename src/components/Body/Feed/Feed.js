import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "../Post/Post";
import { db } from "../../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [img, setImg] = useState();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    let file = document.getElementById("image").files[0];
    if (file !== undefined) {
      setImg(file.name);
      let storageRef = firebase.storage().ref("images/" + img);
      storageRef.put(file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });

      let uploadTask = storageRef.child(`images/${file.name}`).put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
            default:
              console.log("Done");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);

            db.collection("posts").add({
              name: user.displayName,
              description: user.email,
              message: input,
              photoUrl: user.photoUrl || "",
              postImage: downloadURL,
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
        }
      );
    } else {
      console.log("Inside");
      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        postImage: "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    document.getElementById("image").value = "";
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <input id="image" type="file" accept="image/*" />
          {/* <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" /> */}
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Article"
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, postImage },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              postImage={postImage}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
