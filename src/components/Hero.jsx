import React, { useState, useEffect } from 'react';

const TypingEffect = ({ strings, typeSpeed, backSpeed, loop }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(strings[index].substring(0, text.length - 1));
        setTypingSpeed(backSpeed);
      }, backSpeed);
    } else {
      timer = setTimeout(() => {
        setText(strings[index].substring(0, text.length + 1));
        setTypingSpeed(typeSpeed);
      }, typeSpeed);
    }

    if (!isDeleting && text === strings[index]) {
      setIsDeleting(true);
      setTypingSpeed(backSpeed);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex(loop ? (index + 1) % strings.length : index + 1);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings, typeSpeed, backSpeed, loop, loopNum]);

  return (
    <span className='md:text-5xl sm:text-4xl text-xl font-bold md:py-6 p-shadow ml-4'>{text}</span>
  );
};

const Hero = () => {
  return (
    <div className="text-white">
      <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-5xl sm:text-4xl text-xl font-bold md:py-6 p-shadow'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for </p>
          <TypingEffect
            strings={['BTB', 'BTC', 'React']}
            typeSpeed={100}
            backSpeed={120}
            loop={true}
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
