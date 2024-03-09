'use client'
import { Table } from 'flowbite-react';
import { Accordion } from "flowbite-react";
import Stars from './stars';
const productData = [
  {
    title: "Powerful motor",
    description:
      " Equipped with a robust and high-performance 110-volt motor,the Preethi Eco Plus Mixer Grinder efficiently handles a variety of tasks, from grinding to blending.",
  },
  {
    title: "Verstile Functions",
    description:
      "This mixer grinder offers multiple functions, including grinding, blending, and juicing, making it a versatile appliance for your kitchen.",
  },
  {
    title: "Stainless steel jar",
    description:
      "The set includes stainless steel jars of different sizes, each designed for specific tasks such as dry grinding, wet grinding, and blending.",
  },
  {
    title: "Durable Blades",
    description:
      "The mixer grinder comes with razor-sharp stainless steel blades that ensure efficient and consistent grinding of ingredients.",
  },
  {
    title: "3-speed Control",
    description:
      "The 3-speed control knob allows you to customize the grinding or blending process according to the texture you desire.",
  },
];
// ...

const ProductDetails = () => {
  return (
    <div className='flex flex-col sm:mb-4 sm:flex-row sm:justify-start sm:items-start text-balance w-full'>
      <div className="my-2 mt-5 sm:w-[89vw] sm:px-5 sm:pr-10">
        <p className="flex text-wrap w-full my-4 sm:h-auto">
          Upgrade your culinary experience with the Preethi Eco Plus Mixer
          Grinder, a powerful and versatile kitchen appliance designed to handle
          various culinary tasks. With its 550-watt motor, stainless steel
          jars, and shock-proof design, this mixer grinder is a reliable
          companion for your kitchen adventures.
        </p>
        <p className="flex flex-col text-wrap w-full my-4 sm:h-auto">
          <b>Jar Configuration: </b>The Mixer comes with 1.5L Big Jar, 1.0
          L Medium and 0.4L Chutney Jar. All jars are designed for wet and
          dry grinding both.
        </p>

        <Table>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>description</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Brand"}
              </Table.Cell>
              <Table.Cell>Preethi</Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Wattage"}
              </Table.Cell>
              <Table.Cell>550 Watts</Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Voltage"}
              </Table.Cell>
              <Table.Cell>USA 110 Volts</Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Material"}
              </Table.Cell>
              <Table.Cell>ABS Polycarbonate</Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Design"}
              </Table.Cell>
              <Table.Cell>Shock Proof</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
      </div>

      <div className="my-10 mb-4 w-[90vw] sm:px-5 sm:pl-0">
        <div className='mb-8'>
          <Stars />
        </div>
        <div className="flex flex-col" >
          <Accordion>
            {/* <Accordion.Panel>
                  <Accordion.Title>
                    <div >{item.title}</div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="">
                      <p className="text-gray-500 ">
                        {item.description}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel> */}
            <Accordion.Panel>
              <Accordion.Title>{productData[0].title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {productData[0].description}  
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>{productData[1].title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {productData[1].description}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>{productData[2].title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {productData[2].description}
                </p>
                
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>{productData[3].title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {productData[3].description}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>{productData[4].title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {productData[4].description}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


