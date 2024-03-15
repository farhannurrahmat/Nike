const Button = ({ label, iconURL}) => {
    return (
        <button className="">
            {label}
            <img src={iconURL}
                alt="arrow right icon"
            className="ml-2"
            />
      </button>
  )
};

export default Button;
