import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
// import Image from "next/image";
import LoadingLogo from "../image/loading.svg";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const server = process.env.SERVER;

function InputAlamat({ setValue, setDataInput, value }) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestions] = useState([]);

  var getDataAlamat = async (newValue) => {
    var url = `http://127.0.0.1:3001/api/geocoding/${newValue}`;
    setLoading(true);
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // if (!res["Hasil"]) {
        //   return;
        // }
        // setLoading(false);
        // setSuggestions(res["Data"]["hits"]);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  var onSuggestionsFetchRequested = (e) => {
    getDataAlamat(e.value);
  };
  var onSuggestionsClearRequested = (e) => {
    setSuggestions([]);
  };
  var getSuggestionValue = (e) => {
    setDataInput({ geometry: e._source.geometry, zoom: true });
    return e._source.alamat;
  };
  var renderSuggestion = (e) => {
    return <div className="text-sm">{e._source.alamat}</div>;
  };

  var onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Cari Alamat",
    value,
    onChange: onChange,
  };

  return (
    <div className="flex items-center">
      <Autosuggest
        suggestions={suggestion}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        alwaysRenderSuggestions={true}
        id="scrollable-container-example"
      />
      <div className="pr-2 ml-[-2px] h-[38.5px] border-primary border-r-[3px] border-y-[3px] bg-white flex items-center justify-center">
        {loading && <img src={LoadingLogo} height={25} width={25} />}
        {value !== "" ? (
          <AiOutlineClose
            size={20}
            color="red"
            onClick={() => setValue("")}
            className="hover:cursor-pointer"
          />
        ) : (
          <AiOutlineSearch size={20} />
        )}
      </div>
    </div>
  );
}

export default InputAlamat;
