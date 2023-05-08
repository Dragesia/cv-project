import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact.jsx'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Picture from './components/Picture'
import Experience from './components/Experience'
import Education from './components/Education'
import References from './components/References'

function CV() {
  const exampleEducation = [
    {
        name: 'Sirripasa Ilkogretim Okulu',
        type: 'Ilkokul',
        from: '2009',
        to: '2013'
    },
    {
        name: 'Sirripasa Ortaokulu',
        type: 'Ortaokul',
        from: '2013',
        to: '2017'
    },
    {
        name: 'Merkez Bankasi Derince Anadolu Lisesi',
        type: 'Lise',
        from: '2017',
        to: '2021'
    },
    {
        name: 'Sakarya Universitesi',
        type: 'Lisans',
        from: '2021',
        to: 'Today'
    }
  ]
  const exampleExps = [
    {
        name: 'Antik Kapi',
        from: '2015',
        to: 'Today',
        description: 'Best job ever'
    },
    {
        name: 'Adabahce',
        from: '2013',
        to: '2015',
        description: 'Not best job ever'
    }
  ]
  const exampleRefs = [
    {
        name: 'Burak Koc',
        description: 'Ondan nasil lol oynamayacagimi ogrendim'
    },
    {
        name: 'Eray Ozkan',
        description: 'Tam bir o cocugudur kendisi'
    }
  ]
  const exampleSkills = [
    'Cocksucker',
    'Distraction',
    'Dickrider',
    'Huge asshole'
  ]

  const [skills, setSkills] = useState(exampleSkills);
  const [refs, setRefs] = useState(exampleRefs);
  const [description, setDescription] = useState('I work at worlds biggest restaurant, ANTIKKAPI');
  const [name, setName] = useState('Ali Bugra');
  const [job, setJob] = useState('Chef');
  const [exps, setExps] = useState(exampleExps);
  const [educations, setEducations] = useState(exampleEducation);
  const [mail, setMail] = useState('alibugraeroglu@gmail.com');
  const [phone, setPhone] = useState('0553 903 2925');
  const [imgLink, setImgLink] = useState('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleJobChange(e) {
    setJob(e.target.value);
  }
  function handleMailChange(e) {
    setMail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleProfileChange(e) {
    setDescription(e.target.value);
  }
  function handleSkillChange(e, index) {
    const newSkills = skills.map((s, i) => {
      if (index === i) return e.target.value;
      else return s;
    });
    setSkills(newSkills);
  }
  function handleSkillDelete(skill) {
    let newSkills = skills.filter(s => s !== skill);
    setSkills(newSkills);
  }
  function handleSkillAdd() {
    let newSkills = [...skills, ''];
    setSkills(newSkills);
  }
  function eduHandleNameChange(e, index) {
    const newEducations = educations.map((edu, i) => {
      if (index === i) {
        return {
          ...edu,
          name: e.target.value
        }
      } else return edu;
    });
    setEducations(newEducations);
  }
  function eduHandleTypeChange(e, index) {
    const newEducations = educations.map((edu, i) => {
      if (index === i) {
        return {
          ...edu,
          type: e.target.value
        }
      } else return edu;
    });
    setEducations(newEducations);
  }
  function eduHandleFromChange(e, index) {
    const newEducations = educations.map((edu, i) => {
      if (index === i) {
        return {
          ...edu,
          from: e.target.value
        }
      } else return edu;
    });
    setEducations(newEducations);
  }
  function eduHandleToChange(e, index) {
    const newEducations = educations.map((edu, i) => {
      if (index === i) {
        return {
          ...edu,
          to: e.target.value
        }
      } else return edu;
    });
    setEducations(newEducations);
  }
  function handleEducationDelete(edu) {
    const newEducations = educations.filter(education => education !== edu);
    setEducations(newEducations);
  }
  function handleEducationAdd() {
    const newEducations = [...educations, {name: '', type: '', from: '', to: ''}];
    setEducations(newEducations);
  }

  function expHandleNameChange(e, index) {
    const newExps = exps.map((exp, i) => {
      if (index === i) {
        return {
          ...exp,
          name: e.target.value
        } 
      } else return exp;
    });
    setExps(newExps);
  }
  function expHandleFromChange(e, index) {
    const newExps = exps.map((exp, i) => {
      if (index === i) {
        return {
          ...exp,
          from: e.target.value
        } 
      } else return exp;
    });
    setExps(newExps);
  }
  function expHandleToChange(e, index) {
    const newExps = exps.map((exp, i) => {
      if (index === i) {
        return {
          ...exp,
          to: e.target.value
        } 
      } else return exp;
    });
    setExps(newExps);
  }
  function expHandleDescChange(e, index) {
    const newExps = exps.map((exp, i) => {
      if (index === i) {
        return {
          ...exp,
          description: e.target.value
        } 
      } else return exp;
    });
    setExps(newExps);
  }
  function handleExpDelete(exp) {
    const newExps = exps.filter(e => e !== exp);
    setExps(newExps);
  }
  function handleExpAdd() {
    const newExps = [...exps, {name: '', from: '', to: '', description: ''}];
    setExps(newExps);
  }

  function refHandleNameChange(e, index) {
    const newRefs = refs.map((ref, i) => {
      if (index === i) {
        return {
          ...ref,
          name: e.target.value
        }
      } else return ref;
    });
    setRefs(newRefs);
  }
  function refHandleDescChange(e, index) {
    const newRefs = refs.map((ref, i) => {
      if (index === i) {
        return {
          ...ref,
          description: e.target.value
        }
      } else return ref;
    });
    setRefs(newRefs);
  }
  function handleRefDelete(ref) {
    const newRefs = refs.filter(r => r !== ref);
    setRefs(newRefs);
  }
  function handleRefAdd() {
    const newRefs = [...refs, {name: '', description: ''}];
    setRefs(newRefs);
  }

  return (
    <>
      <div className="edit-cv">
        <label htmlFor="name">Full name</label>
        <input type="text" name='name' value={name} onChange={handleNameChange}/>
        <label htmlFor="job">Job</label>
        <input type="text" name='job' value={job} onChange={handleJobChange}/>
        <label htmlFor="picture">Upload image</label>
        <input accept='image/' type="file" name="picture" id="picture" onChange={(e) => {
            let src = getSRC(e);
            setImgLink(src);
          }}/>
        <label htmlFor="mail">Mail</label>
        <input type="text" name='mail' value={mail} onChange={handleMailChange}/>
        <label htmlFor="phone">Phone</label>
        <input type="tel" name='phone' value={phone} pattern='^[0-9]*$' onChange={handlePhoneChange}/>
        <label htmlFor="profile">Profile</label>
        <textarea rows='5' name='profile' value={description} onChange={handleProfileChange}/>
        <label htmlFor="skills" className='skill-label'>Skills <button onClick={handleSkillAdd}>+</button></label>
        <div name='skills' className='skills'>
          {skills.map((skill, i) => {
            return (
            <div className="skill-cont" key={i}>
              <input type='text' value={skill} onChange={(e) => handleSkillChange(e, i)}/>
              <button className='deleteSkill' onClick={() => handleSkillDelete(skill)}>x</button>
            </div>
            )
          })}
        </div>
        <label htmlFor="educations" className='edu-label'>Education <button onClick={handleEducationAdd}>+</button></label>
        <div className="educations" name='educations'>
          {educations.map((education, i) => {
            return (
              <div className="education-cont" key={i}>
                <label htmlFor="name">Name 
                  <input name='name' type="text" value={education.name} onChange={(e) => eduHandleNameChange(e, i)}/>
                </label>
                <label htmlFor="type">Type 
                  <input name='type' type="text" value={education.type} onChange={(e) => eduHandleTypeChange(e, i)}/>
                </label>
                <label htmlFor="from">From 
                  <input name='from' type="text" value={education.from} onChange={(e) => eduHandleFromChange(e, i)}/>
                </label>
                <label htmlFor="to">To 
                  <input name='to' type="text" value={education.to} onChange={(e) => eduHandleToChange(e, i)}/>
                </label>
                <button className='deleteEdu' onClick={() => handleEducationDelete(education)}>x</button>
              </div>
            )
          })}
        </div>
        <label htmlFor="experience" className='exp-label'>Experience <button onClick={handleExpAdd}>+</button></label>
        <div className="experience" name='experience'>
          {exps.map((experience, i) => {
            return (
              <div className="experience-cont" key={i}>
                <label htmlFor="name">Name
                  <input type="text" name='name' value={experience.name} onChange={(e) => expHandleNameChange(e, i)}/>
                </label>
                <label htmlFor="from">From
                  <input type="text" name='from' value={experience.from} onChange={(e) => expHandleFromChange(e, i)}/>
                </label>
                <label htmlFor="to">To
                  <input type="text" name='to' value={experience.to} onChange={(e) => expHandleToChange(e, i)}/>
                </label>
                <label htmlFor="description">Description
                  <input type="text" name='description' value={experience.description} onChange={(e) => expHandleDescChange(e, i)}/>
                </label>
                <button className='deleteExp' onClick={() => handleExpDelete(experience)}>x</button>
              </div>
            )
          })}
        </div>
        <label htmlFor="references" className='ref-label'>References <button onClick={handleRefAdd}>+</button></label>
        <div className="reference" name='reference'>
          {refs.map((ref, i) => {
            return (
              <div className="reference-cont" key={i}>
                <label htmlFor="name">Name
                  <input type="text" name='name' value={ref.name} onChange={(e) => refHandleNameChange(e, i)}/>
                </label>
                <label htmlFor="description">Description
                  <input type="text" name='description' value={ref.description} onChange={(e) => refHandleDescChange(e, i)}/>
                </label>
                <button className='deleteRef' onClick={() => handleRefDelete(ref)}>x</button>
              </div>
            )
          })}
        </div>
      </div>
      <div className='app'>
        <div className='left column'>
          <Picture link={imgLink}/>
          <Contact mail={mail} phone={phone} />
          <Skills skills={skills}/>
          <Education educations={educations}/>
        </div>
        <div className='right column'>
          <Header name={name} job={job}/>
          <Profile description={description}/>
          <Experience exps={exps}/>
          <References refs={refs}/>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <CV />
  )
}

function getSRC(e) {
  return URL.createObjectURL(e.target.files[0]);
}

export default App
