import { useState } from "react";
import { Explorer } from "../../types/explorer";
import fileIcon from "../../assests/file.svg";
import folderIcon from "../../assests/folder.svg";
import "./Folder.css";
import ContextMenu from "../ContextMenu/ContextMenu";

type FolderProps = {
  explorer: Explorer;
};

const Folder = ({ explorer }: FolderProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  // Show or hide the custom context menu
  const [isShown, setIsShown] = useState<boolean>(false);

  // The position of the custom context menu
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Show the custom context menu
  const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // Disable the default context menu
    event.preventDefault();

    setIsShown(false);
    const newPosition = {
      x: event.pageX,
      y: event.pageY,
    };

    setPosition(newPosition);
    setIsShown(true);
  };

  // Hide the custom context menu
  const hideContextMenu = () => {
    setIsShown(false);
  };
  const clickHandler = () => {
    setExpanded(!isExpanded);
    hideContextMenu();
  };

  return (
    <div>
      {isShown && (
        <ContextMenu
          position={position}
          hideContextMenu={hideContextMenu}
          name={explorer.name}
        />
      )}
      {explorer.type === "folder" && (
        <div>
          <div
            onContextMenu={showContextMenu}
            className="folderWrapper"
            onClick={clickHandler}
          >
            <img className="folderIcon" src={folderIcon} alt="folder" />
            {explorer.name}
          </div>
          {explorer.data?.map((item) => {
            return (
              <div
                key={item.name}
                style={{
                  paddingLeft: "15px",
                  display: isExpanded ? "block" : "none",
                }}
              >
                <Folder explorer={item} />
              </div>
            );
          })}
        </div>
      )}
      {explorer.type === "file" && (
        <div className="fileWrapper" onContextMenu={showContextMenu}>
          <img className="fileIcon" src={fileIcon} alt="folder" />
          {explorer.name}
        </div>
      )}
    </div>
  );
};

export default Folder;
