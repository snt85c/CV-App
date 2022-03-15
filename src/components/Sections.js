import Section from "./Section"
export default function Sections({userdata, func}){
    return (
        <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <Section
            name="Bio"
            stateValue={["name", "surname", "address", "phoneNumber", "email"]}
            elements={["Name", "Surname", "Address", "Phone Number", "E-Mail"]}
            data={userdata}
            func={func}
          />
          <Section
            name="Education"
            stateValue={["degree", "info1", "info2"]}
            elements={["Degree", "info1", "info2"]}
            data={userdata}
            func={func}
          />
        </div>
        <Section
          name="Work Experience"
          stateValue={["employer", "info3", "info4"]}
          elements={["Employer", "info3", "info4"]}
          data={userdata}
          func={func}
        />
    
        </>

    )
};