import Resume from "./resume";
import { ExpCircle } from "./svgs";
import resumeUrl from "../utils/fma.pdf";

const Experience = () => {
	return (
		<>
			<div className={`flex flex-col ml-3 lg:items-end`}>
				<div className='font-pop'>
					<h2
						className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text-[50px] lg:leading-[49.2px]`}>
						Experience <small className={`animate-bounce`}>🚀</small>
					</h2>
					<p
						className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]`}>
						Some list of my experience over the year..
					</p>
				</div>
				<div className='flex flex-row relative z-[100] lg:justify-between mt-[30px]'>
					<div className='w-0.5 h-[940px] lg:h-[740px] bg-[#1ED7601A]'></div>
					<div className={`flex flex-col space-y-[60px]`}>
						{/* Zarttech */}
						<div className='flex gap-[28px] lg:gap-[48px]'>
							<div className='relative'>
								<span className='absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]'>
									<ExpCircle />
								</span>
							</div>
							<div>
								<h3 className='font-semibold text-white lg:text-[20px] lg:leading-[30px]'>
									Frontend Engineer
									<span className='italic text-[#FFFFFF99]'> Remote</span>
									&nbsp;
									<span className='italic text-[#FFFFFF99]'>
										March 2025 - Present
									</span>
								</h3>
								<p
									className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
									Bucx
								</p>
								<h5
									className={`text-[#FFFFFF99] font-medium mt-[20px] lg:text-[18px] lg:leading-[27px]`}>
									Buitl A borderless banking platform to spend, send and receive
									payments in multiple currencies or stablecoins globally with
									lightening speed.",
								</h5>
							</div>
						</div>
						<div className='flex gap-[28px] lg:gap-[48px]'>
							<div className='relative'>
								<span className='absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]'>
									<ExpCircle />
								</span>
							</div>
							<div>
								<h3 className='font-semibold text-white lg:text-[20px] lg:leading-[30px]'>
									Frontend Engineer
									<span className='italic text-[#FFFFFF99]'>
										{" "}
										- Netherlands
									</span>
									&nbsp;
									<span className='italic text-[#FFFFFF99]'>
										Jul 2024 - Feb 2025
									</span>
								</h3>
								<p
									className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
									Zarttech
								</p>
								<h5
									className={`text-[#FFFFFF99] font-medium mt-[20px] lg:text-[18px] lg:leading-[27px]`}>
									Developed decentralized hiring and AI-driven job matching
									platforms, boosting engagement by 20% and matching accuracy by
									30%.
								</h5>
							</div>
						</div>
						{/* Realtor Kingz */}
						<div className='flex gap-[28px] lg:gap-[48px]'>
							<div className='relative'>
								<span className='absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]'>
									<ExpCircle />
								</span>
							</div>
							<div>
								<h3 className='font-semibold text-white lg:text-[20px] lg:leading-[30px]'>
									Frontend Engineer
									<span className='italic text-[#FFFFFF99]'>
										{" "}
										- Abuja, Nigeria
									</span>
									&nbsp;
									<span className='italic text-[#FFFFFF99]'>
										Mar 2024 - May 2024
									</span>
								</h3>
								<p
									className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
									Realtor Kingz
								</p>
								<h5
									className={`text-[#FFFFFF99] font-medium mt-[20px] lg:text-[18px] lg:leading-[27px]`}>
									Enhanced user engagement by 25% and expanded user base by
									improving platform accessibility and automating business
									logic.
								</h5>
							</div>
						</div>
						{/* Guru Innovation */}
						<div className='flex gap-[28px] lg:gap-[48px]'>
							<div className='relative'>
								<span className='absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]'>
									<ExpCircle />
								</span>
							</div>
							<div>
								<h3 className='font-semibold text-white lg:text-[20px] lg:leading-[30px]'>
									Lead Frontend Engineer
									<span className='italic text-[#FFFFFF99]'>
										{" "}
										- Calabar, Nigeria
									</span>
									&nbsp;
									<span className='italic text-[#FFFFFF99]'>
										Feb 2023 - May 2024
									</span>
								</h3>
								<p
									className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
									Guru Innovation
								</p>
								<h5
									className={`text-[#FFFFFF99] font-medium mt-[20px] lg:text-[18px] lg:leading-[27px]`}>
									Improved user satisfaction scores by 30% with intuitive UI/UX
									designs and automated UI testing, reducing bugs by 35%.
								</h5>
							</div>
						</div>
						{/* DevcirclesAfrica */}
						<div className='flex gap-[28px] lg:gap-[48px]'>
							<div className='relative'>
								<span className='absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]'>
									<ExpCircle />
								</span>
							</div>
							<div>
								<h3 className='font-semibold text-white lg:text-[20px] lg:leading-[30px]'>
									Software Engineer Intern
									<span className='italic text-[#FFFFFF99]'>
										{" "}
										- Lusaka, Zambia
									</span>
									&nbsp;
									<span className='italic text-[#FFFFFF99]'>
										Jun 2022 - Dec 2022
									</span>
								</h3>
								<p
									className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
									DevcirclesAfrica
								</p>
								<h5
									className={`text-[#FFFFFF99] font-medium mt-[20px] lg:text-[18px] lg:leading-[27px]`}>
									Created scalable documentation sections for an ed-tech
									product, enhancing accessibility for new users.
								</h5>
							</div>
						</div>
						{/* RESUME */}
						<Resume
							pdfUrl={resumeUrl}
							fileName='Franklin Mike Awa.pdf'
							buttonText='Download Resume'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
