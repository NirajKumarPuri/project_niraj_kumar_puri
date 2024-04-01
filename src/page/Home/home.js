import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";

const getData = () => {
  const data = JSON.parse(window.localStorage.getItem("item"));
  if (data) {
    return data;
  } else {
    return [];
  }
};
const Home = () => {
  const { state } = useLocation();

  const [item, setItem] = useState(getData());
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem("item", JSON.stringify(item));
  }, [item]);
  const deleteData = (id) => {
    setItem(
      item?.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className={styles.container}>
      {item?.length > 0 &&
        item?.map((item, index) => {
          return (
            <div key={index} className={styles.content}>
              <div className={styles.content_text}>
                <div className={styles.text_header}>Name:</div>
                <span className={styles.text_value}> {item.name}</span>
              </div>
              <div className={styles.content_text}>
                <div className={styles.text_header}>Email Address:</div>
                <span className={styles.text_value}> {item.email}</span>
              </div>
              <div className={styles.button_box}>
                <button
                  className={styles.edit}
                  onClick={() => navigate(`/`, { state: item })}
                >
                  Edit
                </button>
                <button
                  className={styles.delete}
                  onClick={() => deleteData(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      <div className={styles.backbutton_box}>
        <button className={styles.backbutton} onClick={() => navigate(`/`)}>
          Back Button
        </button>
      </div>
    </div>
  );
};

export default Home;
