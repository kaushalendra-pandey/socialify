import Image from "next/image"
import {signIn, signOut, useSession} from "next-auth/react"
import {
    SearchIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    PlusCircleIcon
} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"
import {modalState} from "../atoms/modelAtom"
import {useRecoilState} from "recoil"

function Header() {

    const {data: session} = useSession()
     console.log(">>>>>>>>>",session)
    const [open,setOpen] = useRecoilState(modalState)
    return (
        <div className="shadow-sm border-b bg-white sticky-top top-0 z-50" >
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
                <div className="relative hidden cursor-pointer lg:inline-grid w-24">
                    <Image src="https://links.papareact.com/ocw"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                {/* <h1> Hello World!</h1> */}

                <div className="relative cursor-pointer w-10 lg:hidden flex-shrink-0">
                    <Image src="https://links.papareact.com/jjm"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>

                {/* Search */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="h-10 w-10"/>                
                    <MenuIcon className="h-6 md:hidden"/>

                    {
                        session ? ( 
                            <>
                                {/* <div className="relative h-10 w-10 hidden cursor-pointer hover:scale-125 md:inline-flex transition-all duration-150 ease-out"> */}
                                    <PaperAirplaneIcon className="h-10 rotate-45 w-10 hidden cursor-pointer hover:scale-125 md:inline-flex transition-all duration-150 ease-out"/> 
                                    <PlusCircleIcon onClick={() => setOpen(true)} className="h-10 w-10 hidden cursor-pointer hover:scale-125 md:inline-flex transition-all duration-150 ease-out"/>  
                                    <UserGroupIcon className="h-10 w-10 hidden cursor-pointer hover:scale-125 md:inline-flex transition-all duration-150 ease-out"/>  
                                    <HeartIcon className="h-10 w-10 hidden cursor-pointer hover:scale-125 md:inline-flex transition-all duration-150 ease-out"/>               
                                    
                                    <img src={session?.user?.image} 
                                    onClick={() => signOut()}
                                    alt="profile-pic" 
                                    className="h-10 w-10 rounded-full cursor-pointer" />
                                {/* </div> */}
                            
                            </>
                        ) : (
                            <button onClick={signIn}> Sign in </button>
                        )
                    }

                   
                </div>
                
                
            </div>

           
            
        </div>
    )
}

export default Header
