import Overview from "../../../../bpl-tools/Admin/Overview/Overview";
import Changelog from "../../../../bpl-tools/Admin/Changelog/Changelog";

import { changelogs } from "../utils/data";
import Button from "../../../../bpl-tools/Components/Button/Button";

const Welcome = (props) => {
  const { isPremium } = props;

  return (
    <>
      <Overview {...props} isPremium={isPremium}>
        {!isPremium && (
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "#/pricing";
            }}>
            Buy Now
          </Button>
        )}
      </Overview>

      <Changelog changelogs={changelogs} {...props} />
    </>
  );
};

export default Welcome;
