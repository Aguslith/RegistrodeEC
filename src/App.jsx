import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from '@mui/material';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api-registrode-ec.vercel.app';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Registro de EC
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Conecta tu futuro profesional con las mejores oportunidades laborales
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid size={6}>
          <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Registro de Postulantes
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Crea tu perfil profesional y encuentra las mejores oportunidades laborales
              </Typography>
              <Link to="/registro-postulante" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Ir al Registro
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={6}>
          <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Registro de Empresas
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Registra tu empresa y encuentra el talento ideal para tu equipo
              </Typography>
              <Link to="/registro-empresa" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Ir al Registro
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 6 }, maxWidth: 600, mx: 'auto' }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Ofertas Laborales
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Explora las oportunidades laborales disponibles según tu perfil de postulante
            </Typography>
            <Link to="/ofertas-laborales" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary" fullWidth>
                Ver Ofertas Laborales
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

function RegistroPostulante() {
  const navigate = useNavigate();
  const [postulante, setPostulante] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    telefono: '',
    ubicacion: '',
    profesion: '',
    nivelExperiencia: '',
    resumen: '',
    linkedin: '',
    portfolio: '',
  });

  const handlePostulanteChange = (e) => {
    setPostulante({ ...postulante, [e.target.name]: e.target.value });
  };

  const handlePostulanteSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/postulantes`, postulante);
      alert('Cuenta de postulante creada exitosamente');
      console.log(response.data);
      setPostulante({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        telefono: '',
        ubicacion: '',
        profesion: '',
        nivelExperiencia: '',
        resumen: '',
        linkedin: '',
        portfolio: '',
      });
      navigate('/');
    } catch (error) {
      alert('Error al crear cuenta de postulante');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        Registro de Postulante
      </Typography>
      <Card>
        <CardContent>
          <Box component="form" onSubmit={handlePostulanteSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={postulante.nombre}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Apellido"
              name="apellido"
              value={postulante.apellido}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Correo"
              name="correo"
              type="email"
              value={postulante.correo}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Contraseña"
              name="contraseña"
              type="password"
              value={postulante.contraseña}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Teléfono"
              name="telefono"
              value={postulante.telefono}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Ubicación"
              name="ubicacion"
              value={postulante.ubicacion}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Profesión/Ocupación"
              name="profesion"
              value={postulante.profesion}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Nivel de Experiencia"
              name="nivelExperiencia"
              value={postulante.nivelExperiencia}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Resumen"
              name="resumen"
              multiline
              rows={3}
              value={postulante.resumen}
              onChange={handlePostulanteChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Perfil de LinkedIn"
              name="linkedin"
              value={postulante.linkedin}
              onChange={handlePostulanteChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Portfolio"
              name="portfolio"
              value={postulante.portfolio}
              onChange={handlePostulanteChange}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Crear Cuenta de Postulante
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

function RegistroEmpresa() {
  const navigate = useNavigate();
  const [empresa, setEmpresa] = useState({
    nombreEmpresa: '',
    industria: '',
    tamañoEmpresa: '',
    sitioWeb: '',
    descripcion: '',
    ubicacion: '',
    direccionCompleta: '',
    linkedinEmpresa: '',
    nombreContacto: '',
    correoContacto: '',
    contraseñaContacto: '',
    telefonoContacto: '',
  });

  const handleEmpresaChange = (e) => {
    setEmpresa({ ...empresa, [e.target.name]: e.target.value });
  };

  const handleEmpresaSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/empresas`, empresa);
      alert('Cuenta de empresa creada exitosamente');
      console.log(response.data);
      setEmpresa({
        nombreEmpresa: '',
        industria: '',
        tamañoEmpresa: '',
        sitioWeb: '',
        descripcion: '',
        ubicacion: '',
        direccionCompleta: '',
        linkedinEmpresa: '',
        nombreContacto: '',
        correoContacto: '',
        contraseñaContacto: '',
        telefonoContacto: '',
      });
      navigate('/');
    } catch (error) {
      alert('Error al crear cuenta de empresa');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        Registro de Empresa
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Crea el perfil de tu empresa y encuentra el mejor talento para tu equipo
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Información de la Empresa
          </Typography>
          <Box component="form" onSubmit={handleEmpresaSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre de la Empresa *"
              name="nombreEmpresa"
              value={empresa.nombreEmpresa}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Industria *</InputLabel>
                  <Select
                    name="industria"
                    value={empresa.industria}
                    onChange={handleEmpresaChange}
                    label="Industria *"
                  >
                    <MenuItem value="Tecnología">Tecnología</MenuItem>
                    <MenuItem value="Salud">Salud</MenuItem>
                    <MenuItem value="Finanzas">Finanzas</MenuItem>
                    <MenuItem value="Educación">Educación</MenuItem>
                    <MenuItem value="Manufactura">Manufactura</MenuItem>
                    <MenuItem value="Retail">Retail</MenuItem>
                    <MenuItem value="Otro">Otro</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Tamaño de la Empresa *</InputLabel>
                  <Select
                    name="tamañoEmpresa"
                    value={empresa.tamañoEmpresa}
                    onChange={handleEmpresaChange}
                    label="Tamaño de la Empresa *"
                  >
                    <MenuItem value="1-10 empleados">1-10 empleados</MenuItem>
                    <MenuItem value="11-50 empleados">11-50 empleados</MenuItem>
                    <MenuItem value="51-200 empleados">51-200 empleados</MenuItem>
                    <MenuItem value="201-500 empleados">201-500 empleados</MenuItem>
                    <MenuItem value="Más de 500 empleados">Más de 500 empleados</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Sitio Web de la Empresa"
              name="sitioWeb"
              value={empresa.sitioWeb}
              onChange={handleEmpresaChange}
              margin="normal"
              InputProps={{
                startAdornment: <InputAdornment position="start">https://</InputAdornment>,
              }}
              placeholder="www.tuempresa.com"
            />
            <TextField
              fullWidth
              label="Descripción de la Empresa"
              name="descripcion"
              multiline
              rows={4}
              value={empresa.descripcion}
              onChange={handleEmpresaChange}
              margin="normal"
              placeholder="Describe tu empresa, cultura, misión y valores..."
              required
            />
            <TextField
              fullWidth
              label="Ubicación"
              name="ubicacion"
              value={empresa.ubicacion}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Dirección Completa"
              name="direccionCompleta"
              value={empresa.direccionCompleta}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="LinkedIn de la Empresa"
              name="linkedinEmpresa"
              value={empresa.linkedinEmpresa}
              onChange={handleEmpresaChange}
              margin="normal"
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Información de Contacto
            </Typography>
            <TextField
              fullWidth
              label="Nombre del Contacto"
              name="nombreContacto"
              value={empresa.nombreContacto}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Correo del Contacto"
              name="correoContacto"
              type="email"
              value={empresa.correoContacto}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Contraseña del Contacto"
              name="contraseñaContacto"
              type="password"
              value={empresa.contraseñaContacto}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Teléfono del Contacto"
              name="telefonoContacto"
              value={empresa.telefonoContacto}
              onChange={handleEmpresaChange}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Crear Cuenta de Empresa
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

function OfertasLaborales() {
  const [ofertasLaborales, setOfertasLaborales] = useState([]);

  useEffect(() => {
    fetchOfertasLaborales();
  }, []);

  const fetchOfertasLaborales = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/ofertas-laborales`);
      setOfertasLaborales(response.data);
    } catch (error) {
      console.error('Error fetching ofertas laborales:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        Ofertas Laborales
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Ofertas Laborales Disponibles
          </Typography>
          <List>
            {ofertasLaborales.length > 0 ? (
              ofertasLaborales.map((oferta, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={oferta.titulo || 'Oferta Laboral'}
                      secondary={
                        <Box>
                          <Typography variant="body2">{oferta.descripcion}</Typography>
                          <Box sx={{ mt: 1 }}>
                            <Chip label={`Empresa: ${oferta.empresa || 'No especificada'}`} size="small" sx={{ mr: 1 }} />
                            <Chip label={`Ubicación: ${oferta.ubicacion || 'No especificada'}`} size="small" sx={{ mr: 1 }} />
                            <Chip label={`Salario: ${oferta.salario || 'No especificado'}`} size="small" />
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < ofertasLaborales.length - 1 && <Divider />}
                </React.Fragment>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No hay ofertas laborales disponibles" />
              </ListItem>
            )}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro-postulante" element={<RegistroPostulante />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
        <Route path="/ofertas-laborales" element={<OfertasLaborales />} />
      </Routes>
    </Router>
  );
}

export default App;
