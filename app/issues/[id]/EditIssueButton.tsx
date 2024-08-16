import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    
      <Button>
        <Link href={`/issues/edit/${issueId}`} className="flex gap-1 items-center">
        <Pencil2Icon />
        Edit Issue
        </Link>
      </Button>
   
  );
};

export default EditIssueButton;
