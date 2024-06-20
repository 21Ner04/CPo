"use client"

import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function HomePagePopular() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentModal, setCurrentModal] = useState<React.ReactNode | null>(null)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(modal: React.ReactNode) {
    setCurrentModal(modal)
    setIsOpen(true)
  }

  const [screenWidth, setScreenWidth] = useState(0)
  const mobilePriorityImagesCount = 2
  const desktopPriorityImagesCount = 5
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII="

  return (
    <>
          <header className="main__header">
      <h1>Скидка 20% на вегетарианскую пиццу!</h1>
        <h3>Скидка 20% на вегетарианскую пиццу!</h3>
        <p>Только в этом месяце мы предлагаем скидку 20% на все вегетарианские пиццы. Не упустите возможность попробовать!</p>
    </header>

      

          <header className="main__header">
      <h1>Развлекательная программа</h1>
        <p>Проведите у нас день рождения или корпоратив с пользой и удовольствием!</p>
      </header>
      <header className="main__header">
      <h1>Вечер живой музыки</h1>
      <p>Пятничные вечера у нас наполнены звуки живой музыки! Приходите провести время в уютной атмосфере под аккомпанемент местных музыкантов.</p>
      </header>
      
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div
            className="modal-backdrop-layer"
            onClick={closeModal}
          />
          <div className="fixed inset-0 overflow-y-auto" onClick={closeModal}>
            <div className="flex min-h-full items-center justify-center p-0 text-left">
              {isOpen && (
                <Dialog.Panel
                  className="relative"
                >
                  <button
                    type="button"
                    className="product-modal__close-btn"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="rounded-xl">{currentModal}</div>
                </Dialog.Panel>
              )}
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}