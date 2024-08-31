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
import { signoutSuccess } from "@/redux/user/authSlice";
import { useSelector } from "react-redux";
import { logout } from "@/API/auth.api";

const ProfileButton = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      await logout();
      dispatch(signoutSuccess());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="mx-5">
          <AvatarImage src={currentUser.profileImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {currentUser.role === "business" && (
          <>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/business-dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
          <Link href="/treatment">Treatments</Link>
        </DropdownMenuItem>
          </>
        )}
        {currentUser.role === "user" && (
          <>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="/setting">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Select Goal
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleSignout}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
