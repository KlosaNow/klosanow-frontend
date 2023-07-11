import React from "react";
import StorageViewComponent from "../../components/StorageView/StorageView";

const BasicStorageView: React.FC = () => {
  return (
    <StorageViewComponent
      title="Basic"
      spaceUsed="700MB"
      totalSpace="5GB"
      message="Upgrade for more space"
    />
  );
};

export default BasicStorageView;
