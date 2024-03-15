const Button = ({ label, iconURL}) => {
    return (
        <button className="">
            {label}
            <img src={iconURL}
                alt="arrow right icon"
            className="ml"
            />
      </button>
  )
};

export default Button;
