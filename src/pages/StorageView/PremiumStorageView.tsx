import React from "react";
import StorageViewComponent from "../../components/StorageViewComponent";

const PremiumStorageView: React.FC = () => {
  return (
    <StorageViewComponent
      title="Premium"
      progressValue={0}
      spaceUsed="3.5 MB"
      totalSpace="unlimited"
      message="Congrats! you have maximum space"
    />
  );
};

export default PremiumStorageView;
