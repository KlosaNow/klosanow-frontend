import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { uniqueId } from "lodash";

import { deleteDraft, fetchDrafts } from "src/api-endpoints/lessons";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import DraftCard from "../../components/DraftCard";
import { EmptyState } from "src/components";
import { createLessonPagePath } from "src/data/pageUrl";
import OverlayLoader from "src/components/OverlayLoader";

const Drafts: React.FC = () => {
  const dispatch = useStoreDispatch();
  const toast = useToast();
  const drafts = useStoreSelector((state) => state.lessons["drafts"]);

  const [loading, setLoading] = React.useState(false);

  const draftsData = drafts.data || [];

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await deleteDraft(id);

      if (!res) throw new Error("Unable to delete draft");

      setLoading(false);
      toast({
        title: "Draft removed successfully",
        status: "success",
        duration: 2500,
        position: "top-right",
      });
      dispatch(fetchDrafts());
    } catch (error: any) {
      setLoading(false);
      toast({
        title:
          error.message ?? error.response.message ?? "Something went wrong",
        status: "error",
        duration: 2500,
        position: "top-right",
      });
    }
  };

  useQuery({
    queryKey: ["drafts"],
    queryFn: () => dispatch(fetchDrafts()),
  });

  return (
    <Box>
      <OverlayLoader loading={loading} description="Deleting draft" />
      <Text
        fontWeight={{
          base: 500,
          md: 600,
        }}
        fontSize={{
          base: "24px",
          md: "32px",
        }}
      >
        All Drafts
      </Text>

      <Box>
        {draftsData.length === 0 ? (
          <EmptyState title="draft" link={createLessonPagePath} />
        ) : (
          <Flex flexDir="column" gap="16px" mt="2rem">
            {draftsData.map((draft) => (
              <DraftCard
                key={uniqueId(`draft_${draft._id}`)}
                draft={draft}
                handleDelete={handleDelete}
              />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Drafts;
