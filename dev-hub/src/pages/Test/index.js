import React, { useState } from 'react';
import {
    Button,
    Center,
    Flex,
  } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { motion } from 'framer-motion';

export const Test = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [likes, setLikes] = useState(35);


    return (
        <Flex padding={10} wrap='wrap'>
          <Button
            as={motion.button}
            m='5'
            animate={{ 
              scale: isAnimating ? 2 : 1,
              backgroundColor: isAnimating ? 'lightblue' : 'lightgrey',
            }}
            transition={{ ease: 'easeIn', duration: 1 }}
            onClick={() => setIsAnimating(!isAnimating)}
            >
              Blow me up
          </Button>

          <Center
            as={motion.div}
            m='5'
            backgroundColor='#adbc92d3'
            width='150px'
            height='150px'
            borderRadius='50%'
            drag
            dragConstraints={{
              right: 20,
              left: -5,
              top: 10,
              bottom: -5
            }}
            whileTap={{
              scale: 1.25
            }}
            >
              Move me around
          </Center>

          <Button
            as={motion.button}
            m='5'
            animate={{
              backgroundColor: likes === 36 ? 'lightpink' : 'lightgrey',
            }}
            transition={{ ease: 'easeIn', duration: 1 }}
            onClick={() => setLikes(36)}
            >
              {likes === 36 ? (
                <>
                  Liked ({likes})  <AiFillHeart />
                </>
                ) : (
                <>
                  Like ({likes})  <AiOutlineHeart />
                </>
                )}
          </Button>
        </Flex>
    );
}