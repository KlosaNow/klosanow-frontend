import {Box, Text,List, ListItem, Circle } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import "../../styles/Notifications.scss"
import backgroundImage1 from '../../assets/images/notification_1.png'
import backgroundImage2 from '../../assets/images/notification_2.png'
import backgroundImage3 from '../../assets/images/notification_3.png'
import backgroundImage4 from '../../assets/images/notification_4.png'
import backgroundImage5 from '../../assets/images/notification_5.png'
import backgroundImage6 from '../../assets/images/notification_6.png'

const padding ='2em'
const justifyContent = 'start'

export default function Notifications() {
	return(
		<Box maxW='720px' m='0 auto'>
			<Box display='flex' justifyContent='start' alignItems="center" h='2em' mb='1em'>
				<ArrowBackIcon boxSize={6} mr='13px'/>
				<Text fontSize='18px' fontWeight={700}>Notifications (2)</Text>
			</Box>
			<Box>
				<List>
					<ListItem p={padding}>
						<Box display='flex' justifyContent={justifyContent} alignItems="center" h='2em'>
							<div className='notification-image' style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
							<div className="notification-info">
								<Text><span className='notification-info-name'>Jessi Akpa</span> added you to a group</Text>
								<Text fontSize='12px' fontWeight='400'>Just Now</Text>
							</div>
						</Box>
					</ListItem>

					<div className="list-line"></div>

					<ListItem p={padding}>
						<Box display='flex' justifyContent={justifyContent}  alignItems="center" h='2em'>
							<div className='notification-image' style={{ backgroundImage: `url(${backgroundImage2})` }}></div>
							<div className="notification-info">
								<Text><span className='notification-info-name'>Seun Daniel</span> added you to a group</Text>
								<Text fontSize='12px' fontWeight='400'>Just Now</Text>
							</div>
						</Box>
					</ListItem>
					
					<div className="list-line"></div>

					<ListItem p={padding}>
						<Box display='flex' justifyContent={justifyContent}  alignItems="center" h='2em'>
							<div className='notification-image' style={{ backgroundImage: `url(${backgroundImage3})` }}></div>
							<div className="notification-info">
								<Text>You subscribed to the basic plan</Text>
								<Text fontSize='12px' fontWeight='400'>3 days ago</Text>
							</div>
						</Box>
					</ListItem>

					<div className="list-line"></div>

					<ListItem p={padding}>
						<Box display='flex' justifyContent={justifyContent}  alignItems="center" h='2em'>
							<div className='notification-image' style={{ backgroundImage: `url(${backgroundImage4})` }}></div>
							<div className="notification-info">
								<Text><span className='notification-info-name'>Timi Crown</span> added you to a group</Text>
								<Text fontSize='12px' fontWeight='400'>4 days ago</Text>
							</div>
						</Box>
					</ListItem>

					<div className="list-line"></div>

					<ListItem p={padding}>
						<Box display='flex' justifyContent={justifyContent}  alignItems="center" h='2em'>
							<div className='notification-image' style={{ backgroundImage: `url(${backgroundImage5})` }}></div>
							<div className="notification-info">
								<Text>You changed your password</Text>
								<Text fontSize='12px' fontWeight='400'>5 days ago</Text>
							</div>
						</Box>
					</ListItem>

					<div className="list-line"></div>

					<ListItem p={padding}>
						<Box display='flex' justifyContent={justifyContent} alignItems="center" h='2em'>
							<div className='notification-image' style={{ backgroundImage: `url(${backgroundImage6})` }}></div>
							<div className="notification-info">
								<Text><span className='notification-info-name'>Idowu Taiwo</span> added you to a group</Text>
								<Text fontSize='12px' fontWeight='400'>5 days ago</Text>
							</div>
						</Box>
					</ListItem>

					<div className="list-line"></div>

				</List>
			</Box>
		</Box>
	)
}