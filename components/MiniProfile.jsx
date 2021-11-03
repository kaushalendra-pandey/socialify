function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" 
            className="rounded-full border p-{2px} w-16 h-16"
            alt="profile" />

            <div className="flex-1 mx-4">
                <h2 className="font-bold"> Kaush </h2>
                <h3 className="text-sm text-gray-400"> Wassup man!</h3>
            </div>  

            <button className="text-blue-400 text-sm font-semibold">
                Signout
            </button>

        </div>
    )
}

export default MiniProfile
