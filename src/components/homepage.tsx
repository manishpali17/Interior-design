"use client"
import Link from "next/link";
import { SVGProps } from "react";
import { CardContainer, CardItem } from "./3dCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Contact from "./contact";


interface IconProps extends SVGProps<SVGSVGElement> {}

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-6 bg-[#f2f2f2] dark:bg-[#333]">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                {" "}
                <CardContainer
                  containerClassName="py-0"
                  className="w-full cursor-pointer"
                >
                  <CardItem>
                    <img
                      src="/design.jpg"
                      width="550"
                      height="550"
                      alt="Hero"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                  </CardItem>
                </CardContainer>
              </CarouselItem>
              <CarouselItem>
                {" "}
                <CardContainer
                  containerClassName="py-0"
                  className="w-full cursor-pointer"
                >
                  <CardItem>
                    <img
                      src="/design2.jpg"
                      width="550"
                      height="550"
                      alt="Hero"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                  </CardItem>
                </CardContainer>
              </CarouselItem>
              <CarouselItem>
                {" "}
                <CardContainer
                  containerClassName="py-0"
                  className="w-full cursor-pointer"
                >
                  <CardItem>
                    <img
                      src="/design3.jpg"
                      width="550"
                      height="550"
                      alt="Hero"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                  </CardItem>
                </CardContainer>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#1e88e5]">
                Elevate Your Space with Our Interior Design Expertise
              </h1>
              <p className="max-w-[600px] text-[#666] md:text-xl dark:text-[#ccc]">
                Our team of experienced designers will transform your living or
                working space into a stunning, functional oasis.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#1e88e5] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#1565c0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e88e5] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#ccc] dark:text-[#333] dark:hover:bg-[#bbb]"
                prefetch={false}
              >
                Get a Quote
              </Link>
              <Link
                href="#services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#ddd] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#f2f2f2] hover:text-[#333] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e88e5] disabled:pointer-events-none disabled:opacity-50 dark:border-[#444] dark:bg-[#333] dark:hover:bg-[#444] dark:hover:text-[#ccc]"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="w-full py-6 bg-[#f2f2f2] dark:bg-[#333]"
      >
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-4 shadow-lg p-2 rounded-lg">
            <BrushIcon className="h-12 w-12 text-[#1e88e5] dark:text-[#ccc]" />
            <h3 className="text-xl font-bold">Interior Design</h3>
            <p className="text-[#666] dark:text-[#ccc]">
              Our team of experienced designers will transform your living or
              working space into a stunning, functional oasis.
            </p>
          </div>
          <div className="grid gap-4 shadow-lg p-2 rounded-lg">
            <PaletteIcon className="h-12 w-12 text-[#1e88e5] dark:text-[#ccc]" />
            <h3 className="text-xl font-bold">Color Consultation</h3>
            <p className="text-[#666] dark:text-[#ccc]">
              Let us help you choose the perfect color palette to complement
              your style and create a cohesive look.
            </p>
          </div>
          <div className="grid gap-4 shadow-lg p-2 rounded-lg">
            <RulerIcon className="h-12 w-12 text-[#1e88e5] dark:text-[#ccc]" />
            <h3 className="text-xl font-bold">Space Planning</h3>
            <p className="text-[#666] dark:text-[#ccc]">
              Our designers will optimize the layout of your space to maximize
              functionality and flow.
            </p>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="w-full py-6 bg-[#f2f2f2] dark:bg-[#333]"
      >
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2 md:flex md:flex-col md:justify-center ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e88e5]">
              Explore Our Past Projects
            </h2>
            <p className="max-w-[600px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#ccc]">
              Take a look at some of our recent interior design projects and see
              how we transformed these spaces.
            </p>
          </div>
          <div className="grid gap-6 ">
            <div className="grid grid-cols-2 gap-4 shadow-xl py-4 px-2">
              <CardContainer
                containerClassName="py-0"
                className="cursor-pointer"
              >
                <CardItem>
                  <img
                    src="/house.jpg"
                    width="275"
                    height="275"
                    alt="Project 1"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                </CardItem>
              </CardContainer>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Modern Loft</h3>
                <p className="text-[#666] dark:text-[#ccc]">
                  We transformed this loft into a sleek, contemporary living
                  space.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 shadow-xl py-4 px-2">
              <CardContainer
                containerClassName="py-0"
                className="cursor-pointer"
              >
                <CardItem>
                  <img
                    src="/room.jpg"
                    width="275"
                    height="275"
                    alt="Project 2"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                </CardItem>
              </CardContainer>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Cozy Cottage</h3>
                <p className="text-[#666] dark:text-[#ccc]">
                  We created a warm, inviting atmosphere in this charming
                  cottage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

function BrushIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function PaletteIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function RulerIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  );
}
