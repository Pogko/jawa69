import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturAdmin = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			<div className="flex flex-col justify-center items-center mt-14 md:mt-10">
				{/* Owner dan Wakil */}
				<div className="flex relative top-[-3rem] mt-10" data-aos="fade-up" data-aos-duration="1200">
					<div className="relative left-[0.2rem]">
						<BorderStruktur Jabatan="Admin" Nama="Iki" Width="120px" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-3" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<div className="relative right-[0.2rem]">
						<BorderStruktur Jabatan="Admin" Nama="Erik" Width="120px" />
					</div>
				</div>

			<div data-aos="fade-up" data-aos-duration="120" className="">
					<img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
				</div> 

			     {/* Admin */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[22rem]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Arshal" Width="120px" />
						<div className="py-[3%]"></div>
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Caca" Width="120px" />
						<div className="py-[3%]"></div>
					</div>
				</div> 

				<div className="relative top-[-15rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>


				{/*	<div className="flex-col hidden lg:flex">
						<BorderStruktur Jabatan="Kesehatan" Nama="Eki" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Hendri" Width="120px" />
					</div> */}
				

				{/* Kesehatan */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] lg:hidden"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					{/* 	<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex lg:w-[50px]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>  */}

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex lg:hidden "
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.85rem] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[23.1rem] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div> 

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[17.5rem] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Pion" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Rey/Kulub Hytam" Width="125px" />
					</div>
				</div> 

				{/* peralatan */}
		{/*		<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-17.85rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[35.6rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[29.7rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Peralatan" Nama="Fajri" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Peralatan" Nama="Windi" Width="120px" />
					</div>
				</div> 

				<div className=" absolute bottom-[15%] lg:bottom-[20%] " data-aos="fade-up" data-aos-duration="1000">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" className="lg:h-3" />
						<img src="LineVertikal3.svg" alt="" className="lg:-z-50" />
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
							<BorderStruktur Jabatan="Peralatan" Nama="Fadly" Width="120px" />
						</div>
					</div>
				</div> */}

				{/* Admin */}
				 	<div
					className=" absolute bottom-[14.5%] lg:hidden"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex justify-center items-center flex-col">
					<img src="LineVertikal3.svg" alt="" className="lg:-z-50" />
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
							<BorderStruktur Jabatan="Admin" Nama="Amat" Width="120px" />
							<BorderStruktur Jabatan="" Nama="Ronald/batagor100k" Width="134px" />
							<div className="py-[3%]"></div>
						</div>
					</div>
				</div> 
			</div>
		</div>
	)
}

export default StrukturAdmin