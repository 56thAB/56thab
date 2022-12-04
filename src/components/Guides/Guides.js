import React from "react";
import styles from "./Guides.module.css";

export default function Guides() {
  return (
    <div className={styles.grid}>
      <div className={styles.guideDiv}>
        <p>Lesson 1</p>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vR-rGCv_4MElUydaE0SSzCMWBK3XPnMMExksbKjHhHNObvQItczJl_PFwe7LfQOtok5XVvx5WxY0st0/pub?embedded=true"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className={styles.guide}
        ></iframe>
      </div>

      <div className={styles.guideDiv}>
        <p>Lesson 2</p>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQbTsKMlH7oCTdo5hBpkU0miX3l9kWws6ZN1nYxVlIrEvQt3O79BagJZY01y1TWwMo6WOVbb97IbTEL/pub"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className={styles.guide}
        ></iframe>
      </div>

      <div className={styles.guideDiv}>
        <p>Lesson 3</p>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSuSqIPVSAh7D0c8y5_15xvaHC-fkBeBeaJTal-JswT3trWdYPDlBxx5uIZLaiytYMJz-a7ugaQ9eLD/pub"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className={styles.guide}
        ></iframe>
      </div>
    </div>
  );
}
