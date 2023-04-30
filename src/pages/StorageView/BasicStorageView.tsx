import React from "react";
import StorageViewComponent from "../../components/StorageViewComponent";

const BasicStorageView: React.FC = () => {
  return (
    <StorageViewComponent
      title="Basic"
      progressValue={5}
      spaceUsed="3.5MB"
      totalSpace="5GB"
      message="Upgrade for more space"
    />
  );
};

export default BasicStorageView;
