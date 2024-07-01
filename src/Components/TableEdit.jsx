"use client";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  createRow,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
  darken,
  lighten,
  useTheme,
} from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fakeData, reason, service, usStates } from "./makeData";
//import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { v4 as uuidv4 } from "uuid";

import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { WidthFull } from "@mui/icons-material";
import styled from "@emotion/styled";

const Example = () => {
  const theme = useTheme();

  //light or dark green
  const baseBackgroundColor =
    theme.palette.mode === "dark"
      ? "rgba(3, 44, 43, 1)"
      : //: "#b5b2b2";
        "#1e1e1e"; //#222a6899

  const [validationErrors, setValidationErrors] = useState({});
  const [editedUsers, setEditedUsers] = useState({});

  const showDate = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDatePicker"]}>
          <DemoItem>
            <MobileDatePicker
              defaultValue={dayjs()}
              sx={{ background: "red", color: "white", fontWeight: "bold" }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        enableEditing: false,
        size: 60,
        enableSorting: false,
        enableColumnActions: false,
        //enableColumnFilter: false,
      },
      {
        accessorKey: "date",
        header: "Fecha (d-m-y)",
        enableEditing: false,
        size: 120,
        Cell: () => showDate(),
        enableSorting: false,
        enableColumnActions: false,
      },
      {
        accessorKey: "crm",
        header: "CRM",
        size: 120,
        enableSorting: false,
        enableColumnActions: false,
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: "text",
          required: true,
          error: !!validationErrors?.[cell.id],
          helperText: validationErrors?.[cell.id],
          //store edited user in state to be saved later
          onBlur: (event) => {
            const validationError = !validateRequired(event.currentTarget.value)
              ? "Requerido"
              : undefined;
            setValidationErrors({
              ...validationErrors,
              [cell.id]: validationError,
            });
            setEditedUsers({ ...editedUsers, [row.id]: row.original });
          },
          onFocus: (event) => {
            event.currentTarget.style.backgroundColor =
              theme.palette.mode === "dark" ? "rgba (3, 44, 43, 1)" : "#1e1e1e";
            event.currentTarget.style.padding = "15px";
            event.currentTarget.style.color = "#fff";
          },
        }),
      },
      {
        accessorKey: "service",
        header: "Servicio",
        editVariant: "select",
        editSelectOptions: service,
        size: 120,
        enableColumnActions: false,
        enableSorting: false,
        muiEditTextFieldProps: ({ row }) => ({
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
          onChange: (event) =>
            setEditedUsers({
              ...editedUsers,
              [row.id]: { ...row.original, state: event.target.value },
            }),
          onFocus: (event) => {
            event.currentTarget.style.backgroundColor =
              theme.palette.mode === "dark" ? "rgba (3, 44, 43, 1)" : "#1e1e1e";
            event.currentTarget.style.padding = "15px";
            event.currentTarget.style.color = "#fff";
          },
        }),
      },
      {
        accessorKey: "numero",
        header: "# Contacto",
        size: 100,
        enableSorting: false,
        enableColumnActions: false,
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: "number",
          required: true,
          error: !!validationErrors?.[cell.id],
          helperText: validationErrors?.[cell.id],
          //store edited user in state to be saved later
          onBlur: (event) => {
            const validationError = !validateRequired(event.currentTarget.value)
              ? "Requerido"
              : undefined;
            setValidationErrors({
              ...validationErrors,
              [cell.id]: validationError,
            });
            setEditedUsers({ ...editedUsers, [row.id]: row.original });
          },
          onFocus: (event) => {
            event.currentTarget.style.backgroundColor =
              theme.palette.mode === "dark" ? "rgba (3, 44, 43, 1)" : "#1e1e1e";
            event.currentTarget.style.padding = "15px";
            event.currentTarget.style.color = "#fff";
          },
        }),
      },
      {
        accessorKey: "state",
        header: "Estado",
        editVariant: "select",
        editSelectOptions: usStates,
        size: 120,
        enableSorting: false,
        enableColumnActions: false,
        muiEditTextFieldProps: ({ row }) => ({
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
          onChange: (event) =>
            setEditedUsers({
              ...editedUsers,
              [row.id]: { ...row.original, state: event.target.value },
            }),
          onFocus: (event) => {
            event.currentTarget.style.backgroundColor =
              theme.palette.mode === "dark" ? "rgba (3, 44, 43, 1)" : "#1e1e1e";
            event.currentTarget.style.padding = "15px";
            event.currentTarget.style.color = "#fff";
          },
        }),
      },
      {
        accessorKey: "reason",
        header: "Motivo",
        editVariant: "select",
        size: 120,
        editSelectOptions: reason,
        enableSorting: false,
        enableColumnActions: false,
        muiEditTextFieldProps: ({ row }) => ({
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
          onChange: (event) =>
            setEditedUsers({
              ...editedUsers,
              [row.id]: { ...row.original, state: event.target.value },
            }),
          onFocus: (event) => {
            event.currentTarget.style.backgroundColor =
              theme.palette.mode === "dark" ? "rgba (3, 44, 43, 1)" : "#1e1e1e";
            event.currentTarget.style.padding = "15px";
            event.currentTarget.style.color = "#fff";
          },
        }),
      },
      {
        accessorKey: "subMotiv",
        header: "Sub Motivo",
        size: 120,
        enableSorting: false,
        enableColumnActions: false,
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: "text",
          required: true,
          error: !!validationErrors?.[cell.id],
          helperText: validationErrors?.[cell.id],
          //store edited user in state to be saved later
          onBlur: (event) => {
            const validationError = !validateRequired(event.currentTarget.value)
              ? "Required"
              : undefined;
            setValidationErrors({
              ...validationErrors,
              [cell.id]: validationError,
            });
            setEditedUsers({ ...editedUsers, [row.id]: row.original });
          },
          onFocus: (event) => {
            event.currentTarget.style.backgroundColor =
              theme.palette.mode === "dark" ? "rgba (3, 44, 43, 1)" : "#1e1e1e";
            //event.currentTarget.style.backgroundColor = "rgb(52, 52, 52)";
            //event.currentTarget.style.borderRadiusTop = "40px";
            event.currentTarget.style.padding = "15px";
            event.currentTarget.style.color = "#fff";
          },
        }),
      },
      {
        accessorKey: "commission",
        header: "Comision",
        enableEditing: false,
        size: 80,
        enableSorting: false,
        enableColumnActions: false,
        muiEditTextFieldProps: ({ row }) => ({
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
          onChange: (event) =>
            setEditedUsers({
              ...editedUsers,
              [row.id]: { ...row.original, state: event.target.value },
            }),
        }),
      },
    ],
    [editedUsers, validationErrors]
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUsers, isPending: isUpdatingUsers } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUsers = async () => {
    if (Object.values(validationErrors).some((error) => !!error)) return;
    await updateUsers(Object.values(editedUsers));
    setEditedUsers({});
  };

  //DELETE action
  const openDeleteConfirmModal = (row) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      deleteUser(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "row", // ('modal', and 'custom' también están disponibles)
    editDisplayMode: "cell", // ('modal', 'cell', 'table', and 'custom' también están disponibles)
    enableCellActions: true,
    enableClickToCopy: "context-menu",
    enableColumnPinning: false, //Fijar la columna en los tres puntos (⁝)
    enableEditing: true,
    enableRowActions: true,
    enableFullScreenToggle: false, //Muestra un icono para pantalla completa
    enablePagination: false, //Muestra la paginacion
    enableGlobalFilter: false, //Desabilita el filtro global (lupa de busqueda)
    enableColumnFilters: false, //Desabilita el filtro en cada columna (lupa de busqueda en cada columna)
    enableHiding: false, //Desabilita el boton donde muestra si ocultar o mostrar las columnas

    //enableColumnResizing: true, //Permite cambiar el tamano de la columna
    //enableTopToolbar: false, //Muestra la barra de herramientas Top-Bottom
    //enableColumnVirtualization: false,
    enableDensityToggle: false, //Muestra el icono de densidad
    initialState: { density: "compact" }, //Establece la densidad
    muiTableBodyCellProps: {
      sx: {
        color: "white",
      },
      align: "center",
      /* onFocus: (event) => {
        event.currentTarget.style.backgroundColor = "#e0dbdbb6";
        event.currentTarget.style.borderRadiusTop = "5px";
        event.currentTarget.style.border = "5px solid black";
        event.currentTarget.style.padding = "5px";
      },
      onBlur: (event) => {
        event.currentTarget.style.backgroundColor = 'transparent'
      } */
    },
    muiTableHeadCellProps: {
      sx: {
        color: "white",
      },
      align: "center",
    },
    muiTableProps: {
      sx: {
        border: "5px solid red",
        width: "100%",
        color: "white",
      },
    },
    getRowId: (row) => row.id,

    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        border: "5px solid blue",
      },
    },

    //TODO:
    muiTableBodyProps: {
      sx: (theme) => ({
        '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td':
          {
            backgroundColor: darken(baseBackgroundColor, 0.1),
          },
        '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
          {
            backgroundColor: darken(baseBackgroundColor, 0.2),
          },
        '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td':
          {
            backgroundColor: lighten(baseBackgroundColor, 0.1),
          },
        '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
          {
            backgroundColor: darken(baseBackgroundColor, 0.2),
          },
      }),
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: baseBackgroundColor,
      draggingBorderColor: theme.palette.primary.main,
    }),

    //Determina el tamano de la tabla con maxHeight y minHeight
    /* muiTableContainerProps: {
      sx: {
        maxHeight: "500px",
      },
    }, */
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderBottomToolbarCustomActions: () => (
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button
          color="success"
          variant="contained"
          onClick={handleSaveUsers}
          disabled={
            Object.keys(editedUsers).length === 0 ||
            Object.values(validationErrors).some((error) => !!error)
          }
        >
          {isUpdatingUsers ? <CircularProgress size={25} /> : "Saves"}
        </Button>
        {Object.values(validationErrors).some((error) => !!error) && (
          <Typography color="error">Fix errors before submitting</Typography>
        )}
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          //table.setCreatingRow(true);
          //La forma más sencilla de abrir el modo de creación de fila sin valores predeterminados o puede pasar un objeto de fila para establecer valores predeterminados con la función auxiliar `createRow`.
          table.setCreatingRow(
            createRow(table, {
              //id: uuidv4().substring(0, 6),
              date: showDate(),
              crm: "96723894678",
              service: "Porta Chip",
              numero: 956734256,
              state: "Cancelado",
              reason: "Delivery",
              commission: "95732",
              subMotiv: "No contesta",
            })
          );
        }}
      >
        Crear nueva venta
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUsers || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  //return <MaterialReactTable table={table} />;
  return (
    /*sx={{ width: "75%" }}*/
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //enviar solicitud de actualización de API aquí
      await new Promise((resolve) => setTimeout(resolve, 500)); //fake api call
      return Promise.resolve();
    },
    //actualización optimista del lado del cliente
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(["users"], (prevUsers) => [
        { ...newUserInfo, id: uuidv4().substring(0, 6) }, //AL momento de guardar, este es el ID final que se guarda
        ...prevUsers,
      ]);
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 500)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 500)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUsers) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.map((user) => {
          const newUser = newUsers.find((u) => u.id === user.id);
          return newUser ? newUser : user;
        })
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 500)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.filter((user) => user.id !== userId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default ExampleWithProviders;

//doble operador de negación (!!) para convertir la longitud del valor en un valor booleano. value > 0 es true; value = 0 es false.
const validateRequired = (value) => !!value.length;

function validateUser(user) {
  return {
    subMotiv: !validateRequired(user.subMotiv) ? "Sub Motivo is Required" : "",
    commission: !validateRequired(user.commission)
      ? "Commission is Required"
      : "",
  };
}
