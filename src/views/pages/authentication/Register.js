import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X } from 'react-feather'

import { handleLogin } from '@store/authentication'

import { AbilityContext } from '@src/utility/context/Can'

import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

import { getHomeRouteForLoggedInUser } from '@utils'

import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, FormFeedback, UncontrolledTooltip } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import illustrationsLight from '@src/assets/images/pages/login-v2.svg'
import illustrationsDark from '@src/assets/images/pages/login-v2-dark.svg'

import '@styles/react/pages/page-authentication.scss'
import { BASE_URL } from '../../../configs/api/url'

const ToastContent = ({ t,  message }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <X size={12} className='cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <span>{message}</span>
      </div>
    </div>
  )
}

const defaultValues = {
  password: '',
  email: '',
  nom: '',
  prenom : "",
  passwordConf : '',
  adresse: "",
  numero : "",
  fonction : "",
}

const Register = () => {

  const { skin } = useSkin()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const ability = useContext(AbilityContext)
  const { control, setError, handleSubmit, formState: { errors } } = useForm({ defaultValues })
  const source = skin === 'dark' ? illustrationsDark : illustrationsLight
  const onSubmit = async data => {
    if (Object.values(data).every(field => field.length > 0)) {

      
    try {
      const response = await fetch(`${BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          passwordConf: data.passwordConf,
          nom: data.nom,
          prenom: data.prenom,
          fonction: data.fonction,
          numero: data.numero,
          adresse: data.adresse,
        })
      });
      const result = await response.json();
      if (response.ok) {
        ability.update(result.user.ability)
        toast(t => ( <ToastContent t={t} message={result.message} /> ))
      } else {
        if (result.message === "Les mots de passe ne correspondent pas") {
          setError('password', {
            type: 'manual',
            message: "Les mots de passe ne correspondent pas"
          });
        } else if (result.message === "Adresse e-mail non valide") {
          setError('email', {
            type: 'manual',
            message: "Adresse e-mail non valide"
          });
        } else if (result.message === "Le mot de passe doit contenir au moins une lettre majuscule") {
          setError('password', {
            type: 'manual',
            message: "Le mot de passe doit contenir au moins une lettre majuscule"
          });
        } else if (result.message === "Le mot de passe doit contenir au moins une lettre minuscule") {
          setError('password', {
            type: 'manual',
            message: "Le mot de passe doit contenir au moins une lettre minuscule"
          });
        } else if (result.message === "Le mot de passe doit contenir au moins un chiffre") {
          setError('password', {
            type: 'manual',
            message: "Le mot de passe doit contenir au moins un chiffre"
          });
        } else if (result.message === "Le mot de passe doit contenir au moins un caractère spécial") {
          setError('password', {
            type: 'manual',
            message: "Le mot de passe doit contenir au moins un caractère spécial"
          });
        } else if (result.message === "Le mot de passe doit contenir au moins 8 caractères") {
          setError('password', {
            type: 'manual',
            message: "Le mot de passe doit contenir au moins 8 caractères"
          });
        } else if (result.message === "E-mail est déjà utilisée") {
          setError('password', {
            type: 'email',
            message: "E-mail est déjà utilisée"
          });
        }
      }
    } catch (error) {
      setError('err', {
        type: 'manual',
        message: 'Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard.'
      });
    }

    
  } else {
    for (const key in data) {
      if (data[key].length === 0) {
        setError(key, {
          type: 'manual'
        });
      }
    }
  }
}

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ms-1'>Vuexy</h2>
        </Link>

        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Register Cover' />
          </div>
        </Col>

        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Inscription sur  Vuexy! 👋
            </CardTitle>

            <Form className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)}>

              <div className='mb-1'>
                <Label className='form-label' for='register-nom'> Nom </Label>
                <Controller id='nom' name='nom' control={control} render={({ field }) => ( <Input autoFocus type='text' placeholder='votre nom' invalid={errors.nom && true} {...field} /> )} />
                {errors.nom && <FormFeedback>{errors.nom.message}</FormFeedback>}
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-prenom'> Prenom </Label>
                <Controller id='prenom' name='prenom' control={control} render={({ field }) => ( <Input autoFocus type='text' placeholder='votre prenom' invalid={errors.prenom && true} {...field} /> )} />
                {errors.prenom && <FormFeedback>{errors.prenom.message}</FormFeedback>}
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-fonction'> Fonction </Label>
                <Controller id='fonction' name='fonction' control={control} render={({ field }) => ( <Input autoFocus type='text' placeholder='votre fonction' invalid={errors.fonction && true} {...field} /> )} />
                {errors.fonction && <FormFeedback>{errors.fonction.message}</FormFeedback>}
              </div>


              <div className='mb-1'>
                <Label className='form-label' for='register-nom'> Tel </Label>
                <Controller id='numero' name='numero' control={control} render={({ field }) => ( <Input autoFocus type='text' placeholder='votre numero' invalid={errors.numero && true} {...field} /> )} />
                {errors.numero && <FormFeedback>{errors.numero.message}</FormFeedback>}
              </div>

              <div className='mb-1'>
              <Label className='form-label' for='register-nom'> Adresse </Label>
              <Controller id='adresse' name='adresse' control={control} render={({ field }) => ( <Input autoFocus type='text' placeholder='votre adresse' invalid={errors.adresse && true} {...field} /> )} />
              {errors.adresse && <FormFeedback>{errors.adresse.message}</FormFeedback>}
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-email'> Email </Label>
                <Controller id='email' name='email' control={control} render={({ field }) => ( <Input autoFocus type='email' placeholder='votre email' invalid={errors.email && true} {...field} /> )} />
                {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
              </div>

              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='register-password'> Mot de passe  </Label>
                </div>
                <Controller id='password' name='password' control={control} render={({ field }) => ( <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} /> )} />
                {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
              </div>

              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='register-passwordConf'> Confirmation </Label>
                </div>
                <Controller id='passwordConf' name='passwordConf' control={control} render={({ field }) => ( <InputPasswordToggle className='input-group-merge' invalid={errors.passwordConf && true} {...field} /> )} />
                {errors.passwordConf && <FormFeedback>{errors.passwordConf.message}</FormFeedback>}
              </div>
                
              <Button type='submit' color='primary' block> Demander à s'inscrire </Button>

              {errors.err && <FormFeedback>{errors.err.message}</FormFeedback>}

            </Form>

            <p className='text-center mt-2'>
              <span className='me-25'>Deja inscrit?</span>
              <Link to='/login'>
                <span>Se connecter</span>
              </Link>
            </p>

          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
