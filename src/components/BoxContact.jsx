import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import ContactForm from './ContactForm'; // Mengimpor komponen ContactForm

// Impor ikon tombol silang (close button)
import CloseIcon from "@mui/icons-material/Close";

const Fade = React.forwardRef(function Fade(props, ref) {
	const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		config: {
			duration: open ? 200 : 50, // Mengatur durasi berdasarkan kondisi open
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

export default function BoxContact() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<div onClick={handleOpen}>
				<div id="BoxContact">
					<div className="flex justify-between relative">
						<img src="/Contact.svg" alt="" className="w-auto h-5" />
						<img src="/next.png" alt="" className="h-4 w-4" />
					</div>
					<h1 className="text-white text-lg font-semibold pr-3 mt-3">
						Contact Us
					</h1>
				</div>
			</div>

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
				}}>
				<Fade in={open}>
					<Box className="" id="modal-container-chat">
						{/* Tambahkan tombol silang di kanan atas */}
						<Button onClick={handleClose} style={{ position: "absolute", top: "2%", right: "0", color: "white", opacity: "70%" }}>
							<CloseIcon />
						</Button>
						<Typography id="spring-modal-description" sx={{ mt: 3 }}>
							<ContactForm /> {/* Menampilkan komponen ContactForm */}
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}