'use client'
import React, { useState } from 'react';
import { Button, Avatar, Container, VStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import { Rating } from 'flowbite-react'

export const fileUploadCss = {
    cursor: "pointer",
    border: "none",
    borderRadius: "30px",
    padding: "2vw",
    color: 'black',
    marginLeft: '-5%',
    width: "110%",
    height: '100%',
}

const ReviewModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [imagePrev, setImagePrev] = useState('');

    const changeImage = (e) => {
        const file = e.target.files[0];
        console.log(file);

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePrev(reader.result);
                setImage(file);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to submit the review here
    };

    const closeHandler = () => {
        onClose();
    };

    return (
        <>
            <Button onClick={onOpen} className='hover:bg-slate-100 xl:w-[20vw] hover:text-black font-bold w-[90vw] md:w-[33.5vw] py-3 px-4 bg-black text-white rounded-lg p-3 my-4'>Submit Review</Button>
            <Modal isOpen={isOpen} onClose={closeHandler} >
                <ModalOverlay backdropFilter={'blur(100px)'} />
                <ModalContent className="border-1 border-white bg-white shadow-[0px 0px 20px] sm:p-0 sm:pb-[2vw] sm:my-[5vw] p-[2vw] py-[3vw] my-[10vw] sm:mx-[10vw]">
                    <div className='flex justify-between m-[2vw]'>
                        <ModalHeader className="flex text-[6vw] gap-2 sm:text-[2vw]"><span>Submit</span> <span>Review</span></ModalHeader>
                        <ModalCloseButton className="b-none bg-black text-[3vw] sm:text-[1vw] text-white px-3 text-center rounded-md" />
                    </div>
                    <ModalBody className="">
                        <Container className="">
                            <form onSubmit={(e) => changeImageSubmitHandler(e, image)} className='my-3'>
                                <div className='my-4 flex flex-col items-center justify-center'>
                                    {imagePrev && <img className='sm:h-[10vw] sm:w-[10vw] h-[30vw] w-[30vw] rounded-full object-cover mb-[3vw]' src={imagePrev} />}
                                    <div className="flex flex-col gap-2">
                                        <Rating size="lg">
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star filled={false} />
                                        </Rating>
                                    </div>
                                    <Input
                                        required
                                        type={'text'}
                                        className="my-1 w-[85vw] sm:w-[50vw] sm:my-2"
                                        placeholder='Enter the review title'
                                    />
                                    <Input
                                        required
                                        type={'text'}
                                        className="my-1 w-[85vw] sm:w-[50vw] sm:my-2"
                                        placeholder='Enter the review description'
                                    />
                                    <Input
                                        required
                                        type={'file'}
                                        // css={{ '&::file-selector-button': fileUploadCss }}
                                        onChange={changeImage}
                                        className="my-1 w-[85vw] sm:w-[50vw] sm:my-2"
                                    />
                                    <Button
                                        className="w-[85vw] sm:p-3 sm:w-[50vw] sm:my-2 my-1 rounded-lg cursor-pointer bg-black text-white p-[3vw]"
                                        colorScheme={'yellow'}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='bg-black sm:p-3 text-white rounded-md mr-[1.2vw] py-[2vw] px-[3vw] mt-[1vw]' onClick={closeHandler}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ReviewModal;