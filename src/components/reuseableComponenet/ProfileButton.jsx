import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useDispatch } from "react-redux";
import axiosInstance from "@/axiosInstance";
import { signoutSuccess } from "@/redux/user/authSlice";
import { useSelector } from "react-redux";

const ProfileButton = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      const res = await axiosInstance.post('/auth/logout');
      const data = res.data;
  
      if (res.status !== 200) {
        console.log(data.message);
      } else {
        localStorage.clear();
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="mx-5">
          <AvatarImage src={currentUser.profileImage
} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/setting">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Select Goal
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleSignout}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
