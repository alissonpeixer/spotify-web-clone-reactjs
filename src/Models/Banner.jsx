import Box from '@mui/material/Box';



export function Banner(){
    return(

        <>
        
        <Box className='bgCustom1 bgCustom2  bgCustom3'       
            sx={{
            width: "auto",
            height: "100vh"

            }}
        >  

            
            <div className='text-center  h-screen text-greenForte pt-[14rem] text-[3rem] md:text-[12rem] md:pt-[15rem]'>
                <div className='max-w-2 ml-auto mr-auto md:max-w-[100rem]'>
                    
                    <div className='flex  flex-col  items-center  space-y-8'>

                        <div className='circularFont leading-[4rem] xl:leading-[10rem] '>
                            <h1>Escutar muda tudo</h1>
                        </div>
                        <p className='text-[1.2rem] pl-5 pr-5 text-center  circularFont2 xl:text-[1.5rem]'>
                        Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
                        
                        </p>
                        
                        <a href="">
                            <div className=' w-60 h-14 rounded-full bg-greenForte'>
                                <div className=' text-textBtn text-xl pt-3.5 circularFont2'>
                                    BAIXAR SPOTIFY FREE
                                </div>
                            </div>
                        </a>
                           
                       
                    </div>
                </div>
            </div>
            

        </Box>

        </>
    )
}