import React from "react";
import StorageViewComponent from "../../components/StorageViewComponent";

const FreeStorageView: React.FC = () => {
  return (
    <StorageViewComponent
      title="Free"
      progressValue={70}
      spaceUsed="840 MB"
      totalSpace="1.2 GB"
      message="Upgrade for more space"
    />
  );
};

export default FreeStorageView;
