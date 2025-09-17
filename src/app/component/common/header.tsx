import Link from "next/link"
import { Button } from "../atoms/button"

export const Header = ()=>{
    return(
        <header className="relative z-10 backdrop-blur-[10px] bg-[#00000047]">
            <nav className="border-b border-[#ffffff1a]">
                <div className="flex items-center justify-between  m-auto px-[75px] py-[15px]">
                        <div className="flex items-center justify-between ">
                            <div className="pr-[45px] ">
                                   <Link href=""><img src="/assets/logo.png" className="w-[250px]"/></Link>
                            </div>
                         
                            <div className="pl-[45px]">
                                <ul className="flex">
                                    <li className="p-[0px_15px] text-[#fff]"><Link href="">Home</Link></li>
                                    <li className="p-[0px_15px] text-[#979797]"><Link href="">Capabilities</Link></li>
                                    <li className="p-[0px_15px] text-[#979797]"><Link href="">Industries</Link></li>
                                    <li className="p-[0px_15px] text-[#979797]"><Link href="">About us</Link></li>
                                    <li className="p-[0px_15px] text-[#979797]"><Link href="">Case Studies</Link></li>
                                
                                </ul>
                            </div>
                        </div>
                        
                        <div >
                            <Button  variant="solid">Join Us</Button>
                        </div>
                </div>                
            </nav>
        </header>
    )
}