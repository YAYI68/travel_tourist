

export const RoundButton = ({children,height,width,bgColor}) => {
  return (
    <button className={`h-[${height}]  rounded-[50%] flex items-center justify-center hover:-translate-y-1 transition-[transform]  shadow-md`} style={{
        width,
        background:bgColor,
    }}>
        {children}
    </button>
  )
}
