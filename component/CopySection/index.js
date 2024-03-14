import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

import styles from "@/component/CopySection/index.module.css";

const CopySection = (props) => {
  const { roomId } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000); // Hide message after 2 seconds
  };

  return (
    <div className={styles.copyContainer}>
      <div className={styles.copyHeading}>Copy Room ID:</div>
      <hr />
      <div className={styles.copyDescription}>
        <span>{roomId}</span>
        <CopyToClipboard text={roomId} onCopy={handleCopy}>
          <Copy className="ml-3 cursor-pointer px-10" />
        </CopyToClipboard>
      </div>
      {copied && <div className={styles.copyMessage}>Copied to clipboard!</div>}
    </div>
  );
};

export default CopySection;