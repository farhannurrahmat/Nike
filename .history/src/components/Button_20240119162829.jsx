const Button = ({ label, iconURL}) => {
    return (
        <button className="">
            {label}
            <img src={iconURL}
                alt="arrow right icon"
            className="ml-2 rounded-full w-6 h-6"
            />
      </button>
  )
};

export default Button;
