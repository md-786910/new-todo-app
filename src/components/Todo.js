import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { app, database } from "../firebaseConfig";

function Todo() {
  const [title, setTitle] = useState({
    title: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState([]);

  const collectionRef = collection(database, "firebaseTodos");

  // handle text input
  const handleText = (e) => {
    const value = e.target.value;
    setTitle({ title: value, isCompleted: false });
  };

  // add todo
  const addTodo = () => {
    if (title) {
      console.log(title);
      addDoc(collectionRef, {
        title: title.title,
        isCompleted: title.isCompleted,
      })
        .then((resp) => {
          alert("successfully added");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("please add a title 😎:");
    }
    setTitle({ title: "" });
  };

  const handleCheckBox = (e) => {
    const value = e.target.value;
    const id = value;

    const docRef = doc(database, "firebaseTodos", id);

    getDoc(docRef)
      .then((doc) => {
        const singleData = doc.data();
        updateDoc(docRef, {
          title: singleData.title,
          isCompleted: singleData.isCompleted
            ? !singleData.isCompleted
            : !singleData.isCompleted,
        })
          .then(() => {
            // alert("Updated")
          })
          .catch((err) => {
            alert("Failed to update");
          });
      })
      .catch((err) => {
        alert("Error.message");
      });
    // console.log(value);
  };

  // delete todo
  const deleteTodo = (id) => {
    const docDelete = doc(database, "firebaseTodos", id);
    deleteDoc(docDelete)
      .then(() => {
        return;
      })
      .catch(() => {
        alert("Error.message");
      });
  };

  useEffect(() => {
    onSnapshot(collectionRef, (resp) => {
      const todos = resp.docs.map((item, index) => {
        return { ...item.data(), id: item.id };
      });
      setTodos(todos);
    });
  }, []);
  return (
    <>
      <div className="fluid-container">
        <div className="todoCard mt-3 p-3">
          <div className="inputText">
            <h1>Add Todo:➕</h1>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input
                type="text"
                name="title"
                value={title.title}
                className="form-control "
                placeholder="
                         This is tea."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleText}
              />
            </div>

            <button
              type="button"
              className="btn btn-success mt-3"
              onClick={() => addTodo()}
            >
              Add Todos
            </button>
          </div>
          <div className="listTodo ">
            <h1>Your Todos:🔥</h1>
            <div className="todos mt-3 ">
              {todos &&
                todos.map((todo, index) => {
                  return (
                    <div className="todoCardItems" key={todo.id}>
                      <div className="todoFans">
                        <span class="badge bg-secondary">{index + 1}</span>

                        <div className="form-check mx-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="check"
                            value={todo.id}
                            id="flexCheckDefault"
                            onChange={handleCheckBox}
                            checked={todo.isCompleted}
                          />
                        </div>
                        <div className="titleTodos">
                          <h5
                            className={
                              todo.isCompleted
                                ? "text-decoration-line-through"
                                : "text-decoration-none"
                            }
                          >
                            {todo.title}
                          </h5>
                        </div>
                      </div>
                      <div className="btn" onClick={() => deleteTodo(todo.id)}>
                        ❎
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
