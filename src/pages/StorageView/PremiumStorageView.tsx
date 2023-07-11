import React from "react";
import StorageViewComponent from "../../components/StorageView/StorageView";

const PremiumStorageView: React.FC = () => {
  return (
    <StorageViewComponent
      title="Premium"
      spaceUsed="3.5 MB"
      totalSpace="unlimited"
      message="Congrats! you have maximum space"
    />
  );
};

export default PremiumStorageView;
