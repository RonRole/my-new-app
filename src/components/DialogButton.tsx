import React from "react";

const DialogButton = () => {
  const [path, setPath] = React.useState("");
  const openDialog = React.useCallback(async () => {
    const path = await window.sampleAPI.openDialog();
    setPath(path);
  }, []);

  return (
    <>
      <button onClick={openDialog}>Dialog!</button>
      <div>{path}</div>
    </>
  );
};

export default DialogButton;
