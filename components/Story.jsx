function Story({img, username,}) {
    return (
        <div>
            <img 
            className="h-14 w-14 rounded-full p-[1.5px]
            border-red-500 border-2
            object-contain cursor-pointer
            hover:scale-110 transition-transform first-letter:duration-200 ease-out
            " 
            src={img} alt="profile" />
            <p className="text-x5 w-14 truncate text-center"> {username} </p>
        </div>
    )
}

export default Story
