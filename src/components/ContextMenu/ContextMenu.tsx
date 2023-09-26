import "./ContextMenu.css";

type MenuProps = {
  position: { x: number; y: number };
  hideContextMenu: () => void;
  name: string;
};

function ContextMenu({ position, hideContextMenu, name }: MenuProps) {
  const actionHandler = (action: string) => {
    console.log("File Name: ", name);
    console.log("Action: ", action);
    hideContextMenu();
  };
  return (
    <div
      style={{ top: position.y, left: position.x }}
      className="customContexMenu"
    >
      <div className="option" onClick={() => actionHandler("Copy")}>
        Copy
      </div>
      <div className="option" onClick={() => actionHandler("Delete")}>
        Delete
      </div>
      <div className="option" onClick={() => actionHandler("Rename")}>
        Rename
      </div>
    </div>
  );
}

export default ContextMenu;
