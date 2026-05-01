import * as React from "react"
import GroupWa from './GroupWa';

const BoxWa = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<div onClick={handleOpen}>
				<div id="BoxWa">
					<div className="flex justify-between relative">
						<img src="/wa.svg" alt="" className="w-auto h-10" />
						<img src="/next.png" alt="" className="h-4 w-4" />
					</div>
					<h1 className="text-white text-lg font-semibold pr-3 mt-3">
						Group WhatsApp
					</h1>
				</div>
			</div>

			<GroupWa open={open} handleClose={handleClose} />
		</div>
	);
}

export default BoxWa;