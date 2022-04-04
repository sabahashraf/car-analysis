import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="px-6 pt-20 pb-24 mx-auto max-w-7xl md:px-2 w-3/4">
        <h3 className="text-xl font-medium mb-4 text-gray-600">
          What is Context api?{" "}
        </h3>
        <p className="mb-5 leading-7 text-gray-600">
          In react data can be passed in only one direction which is upper level
          to lower level.there might come a situation when to receive the data
          in final level the data is being sent at almost every level due to
          requirements which is called prop drilling.To avoid this situation
          ,Context api a react structure provides a way to pass data through the
          component tree without having to pass props down manually at every
          level.
        </p>
        <h3 className="text-xl font-medium mb-4 text-gray-600">
          What are semantic tags in html?
        </h3>
        <p className="mb-5 leading-7 text-gray-600">
          Semantic tags are those HTML elements which are self explanatory to
          human and browsers.their name accurately describle the purpose of the
          element and the type of content inside them.
          form,table,article,aside,figcaption,figure,footer,header,main are some
          examples of semantic tags.
        </p>
        <h3 className="text-xl font-medium mb-4 text-gray-600">
          What are the difference between inline, block and inline-block
          elements?
        </h3>
        <p className="leading-7 text-gray-600">
          <p className="mb-2 text-gray-600">
            <span className="font-semibold text-gray-600">
              Inline elements:
            </span>
            Inline elements are those who displays its content inline or on the
            same line.Inline elements do not start ona new line.width and height
            properties haas no effect onthem. span,a,img,em,strong,i,small are
            some inline elements.
          </p>
          <p className="mb-2 text-gray-600">
            <span className="font-semibold text-gray-600">
              Inline-block elements:
            </span>
            The only difference between inline and inline-block elements are we
            can set width and height properties on them.
          </p>
          <p className="mb-2 text-gray-600">
            <span className="font-semibold text-gray-600">Block elements:</span>
            Block elements starts on a new line and takes up the whole width.It
            means block elements occupy the whole width of its parent element.
            div,h1,section,li are some block elements.
          </p>
        </p>
      </section>
    </div>
  );
};

export default Blogs;
