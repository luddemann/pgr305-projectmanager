import Avatar1 from '../images/boy-1.svg'
import Avatar2 from '../images/boy.svg'
import Avatar3 from '../images/girl-1.svg'
import Avatar4 from '../images/girl.svg'
import Avatar5 from '../images/man-1.svg'
import Avatar6 from '../images/man-2.svg'

const imgArray = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6]

export const getRandomAvatar = () =>
  imgArray[Math.floor(Math.random() * imgArray.length)]

export const getRandomId = () => Date.now() + Math.floor(Math.random() * 420)
