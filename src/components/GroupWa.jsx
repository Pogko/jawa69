import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "@mui/icons-material/Close";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: {
      duration: open ? 200 : 50,
    },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const GroupWa = ({ open, handleClose }) => {
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={open}>
        <Box className="" id="modal-container-chat">
          <Button onClick={handleClose} style={{ position: "absolute", top: "2%", right: "0", color: "white", opacity: "70%" }}>
            <CloseIcon />
          </Button>
          <div className="text-center text-2xl font-semibold mb-2 text-white" id="Glow">
            Group WhatsApp
          </div>
          <div className="flex flex-col mt-5">
            <a href="https://chat.whatsapp.com/GghG1AFcPxnDD2sN5EIvn0" className="button">
              <img src="/wa.svg" alt="WA Icon" className="wa-icon" />
              <span className="button-text">Group 1</span>
            </a>
          </div>
        </Box>
      </Fade>
    </Modal> 
  );
};

GroupWa.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default GroupWa;