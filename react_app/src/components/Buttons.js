import { Button } from "@mui/material";

function Buttons({ next, previous, handleNext, handlePrevious,count}) {
  if (count==1) {
    return
  }

  if (next !== "" && previous !== "") {
    return (
      <>
        <Button variant="contained" onClick={()=>handlePrevious()}>
          Previous
        </Button>
        <Button variant="contained" onClick={()=>handleNext()}>
          Next
        </Button>
      </>
    );
  } else if (next !== "" && previous === "") {
    return (
      <Button variant="contained" onClick={()=>handleNext()}>
        Next
      </Button>
    );
  } else {
    return (
      <Button variant="contained" onClick={()=>handlePrevious()}>
        Previous
      </Button>
    );
  }
}

export default Buttons;
