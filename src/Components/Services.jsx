import React from 'react';


const Service = () => {
  const services = [
    { title: 'Android Development', imgSrc: img1 },
    { title: 'Web Development', imgSrc: img2 },
    { title: 'Database Management', imgSrc: img3 },
    { title: 'Business Analytics', imgSrc: img4 },
    { title: 'Digital Marketing', imgSrc: img5 },
    { title: 'Video Creation', imgSrc: img6 },
  ];

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {services.map((service, index) => (
                <Card key={index} title={service.title} imgsrc={service.imgSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
