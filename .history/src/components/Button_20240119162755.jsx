const Button = ({ label, iconURL}) => {
    return (
        <button className="">
            {label}
            <img src={iconURL}
             alt="arrow right " />
      </button>
  )
};

export default Button;
