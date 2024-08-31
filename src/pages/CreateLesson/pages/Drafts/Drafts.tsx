import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Flex, Text } from "@chakra-ui/react";
import { uniqueId } from "lodash";

import { fetchDrafts } from "src/api-endpoints/lessons";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import DraftCard from "../../components/DraftCard";
import { EmptyState } from "src/components";
import { createLessonPagePath } from "src/data/pageUrl";

const Drafts: React.FC = () => {
  const dispatch = useStoreDispatch();
  const drafts = useStoreSelector((state) => state.lessons["drafts"]);

  const draftsData = drafts.data || [];

  useQuery({
    queryKey: ["drafts"],
    queryFn: () => dispatch(fetchDrafts()),
  });

  return (
    <Box>
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
              <DraftCard key={uniqueId(`draft_${draft._id}`)} draft={draft} />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Drafts;
