import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import "./styles/styles.css"

export default function BrowsePage(){

    return (
      <div className="BrowsePageBox">
        <Container>
        <header className="PageHeader">
        <h3 className='H3RegularText'>Search&<span className='italic'>Find</span></h3>
        <p className='BiggerP'>Integer dapibus placerat ante, eu bibendum ex ultricies non. Nunc pharetra nulla ut lacus pretium, 
        id molestie enim hendrerit. Aliquam erat volutpat. Etiam blandit nec mi sed lacinia. Aliquam ut mi justo. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer dapibus placerat ante, eu bibendum ex ultricies non. Nunc pharetra nulla ut lacus pretium, id molestie enim hendrerit. Aliquam erat volutpat. Etiam blandit nec mi sed lacinia. 
        Aliquam ut mi justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </header>
          <SearchComponent></SearchComponent> 
        </Container>
      </div>
    )
}