import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import LocalItem from '../../components/LocalItem';
import MoreNews from '../../components/MoreNews';
import Footer from '../../components/Footer';
import AddNewForm from './AddNewForm';
import { LocalNewsActions } from '../../store/ducks/localNews';

import Container from './styles';
import NoItems from '../../components/NoItems';
import { slug } from '../../utils/slug';

function Local() {
  const { list } = useSelector((state) => state.localNews);
  const [formOpen, setFormOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(0);
  const [article, setArticle] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [tempArticle, setTempArticle] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (art) => {
    dispatch(LocalNewsActions.localNewsDelete(art.id));
    setTempArticle(art);
    setSnackOpen(true);
  };

  const handleUndo = () => {
    dispatch(LocalNewsActions.localNewsAdd(tempArticle));
    setTempArticle(null);
    setSnackOpen(false);
  };

  return (
    <Container data-testid="local-news">
      <Header />
      <div className="content">
        <div className="form-control">
          <button onClick={() => setFormOpen(true)}>Add Article +</button>
        </div>
        <section>
          {list?.map((item) => {
            const id = slug(item.title);
            return (
              <LocalItem
                data-testid={id}
                key={id}
                item={item}
                onDelete={() => {
                  handleDelete(item);
                }}
                onUpdate={() => {
                  setArticle(item);
                  setUpdateOpen(true);
                }}
              />
            );
          })}
        </section>
      </div>
      {(!list || !list?.length) && <NoItems />}
      <MoreNews />
      <Footer />
      <Drawer anchor="right" open={formOpen} onClose={() => setFormOpen(!formOpen)}>
        <AddNewForm onClose={() => setFormOpen(false)} />
      </Drawer>
      <Drawer anchor="right" open={updateOpen} onClose={() => setUpdateOpen(false)}>
        <AddNewForm onClose={() => setUpdateOpen(false)} article={article} />
      </Drawer>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackOpen}
        autoHideDuration={10000}
        onClose={() => setSnackOpen(false)}
        message="Article deleted"
        action={(
          <>
            <Button color="secondary" size="small" onClick={handleUndo}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        )}
      />
    </Container>
  );
}

export default Local;
